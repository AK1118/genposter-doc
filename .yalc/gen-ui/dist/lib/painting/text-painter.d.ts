import { Painter } from "@/lib/painting/painter";
import Rect, { Offset, Size } from "@/lib/basic/rect";
import { Color } from "./color";
import { FontStyle, FontWeight, Shadow, TextAlign, TextDecoration, TextDecorationStyle, TextDirection, TextOverflow } from "../core/base-types";
import { TextSelection } from "../services/text-editing";
declare class Accumulator {
    private _value;
    get value(): number;
    increment(): number;
}
type InlineSpanVisitor = (span: InlineSpan) => boolean;
declare abstract class InlineSpan {
    abstract build(builder: ParagraphBuilder): void;
    abstract getSpanForPosition(offset: Accumulator): InlineSpan;
    abstract visitChildren(visitor: InlineSpanVisitor): boolean;
    abstract computeToPlainText(): void;
}
export declare class ParagraphConstraints {
    private _width;
    constructor(width: number);
    get width(): number;
}
interface ParagraphStyleOption {
    textAlign?: TextAlign;
    textDirection?: TextDirection;
    maxLines?: number;
    ellipsis?: string;
    height?: number;
    fontFamily?: string;
}
export declare class ParagraphStyle implements ParagraphStyleOption {
    textAlign: TextAlign;
    textDirection: TextDirection;
    /**
     * 该属性接收一个正整数用于限制文字最大行数。当文字实际最大行数超过[maxLines]时将不再继续被布局渲染，详见函数  [Paragraph.performConstraintsWidth]
     */
    maxLines: number;
    /**
     * 接收自定义ellipsis的字符串，用于自定义在文字超出后的ellipsis效果。
     * 替换逻辑详见 [Paragraph.replaceEllipsis]
     */
    ellipsis?: string;
    height?: number;
    fontFamily: string;
    constructor(option?: ParagraphStyleOption);
    getParagraphStyle(paragraphStyle?: Partial<ParagraphStyleOption>): ParagraphStyle;
}
interface TextDecorationOption {
    decoration: TextDecoration;
    decorationStyle: TextDecorationStyle;
    decorationColor: Color;
}
interface TextStyleOption extends ParagraphStyleOption, TextDecorationOption {
    color: Color;
    fontSize: number;
    fontWeight: FontWeight;
    fontStyle: FontStyle;
    letterSpacing: number;
    wordSpacing: number;
    foreground: Painter;
    shadow: Shadow;
    overflow: TextOverflow;
}
export declare class TextStyle extends ParagraphStyle implements TextStyleOption, TextDecorationOption {
    color: Color;
    fontSize: number;
    fontWeight: FontWeight;
    fontStyle: FontStyle;
    letterSpacing: number;
    wordSpacing: number;
    decoration: TextDecoration;
    decorationStyle: TextDecorationStyle;
    decorationColor: Color;
    foreground: Painter;
    shadow: Shadow;
    /**
     * 当父节点设置了绝对的size时，超出安全返回的文字不会被进行裁剪和ellipsis,除非设置overflow属性为[TextOverflow.clip]或是[TextOverflow.ellipsis]，
      需要注意的是[TextOverflow.ellipsis] 必须设置maxLines才会正常运行。
      当父节点设置了绝对的size，且overflow是[TextOverflow.clip],文字将会被裁剪。仅保留安全区域内的文字内容
      若当前textStyle设置了maxLines且overflow是[TextOverflow.ellipsis]，超出的文字内容将会被…替代。
      例子，以下内容将会裁剪掉超出部分，但不会再在末尾渲染 …
      将overflow: TextOverflow.clip, 替换为 overflow: TextOverflow.ellipsis, 超出部分将会被…替代。
      new SizeRender(
        290,
        100,
        new ParagraphView({
          text: new TextSpan({
            text: "The @media CSS at-rule can be used to apply part of a style sheet based on the result of one or more media queries. With it, you specify a media query and a block of CSS to apply to the document if and only if the media query matches the device on which the content is being used.😊",
            textStyle: new TextStyle({
              color: "black",
              maxLines: 5,
              overflow: TextOverflow.clip,
            }),
          }),
        })
      )
     */
    overflow: TextOverflow;
    constructor(option?: Partial<TextStyleOption>);
    getTextStyle(style?: Partial<TextStyleOption>): TextStyle;
    apply(style?: Partial<TextStyleOption>): TextStyle;
    private toOption;
    copyWith(style?: Partial<TextStyleOption>): TextStyle;
}
declare class TextBox extends Rect {
    direction: TextDirection;
    lineHeight: number;
    constructor(width: number, height: number, direction: TextDirection);
    static fromLTRBD(width: number, height: number, direction: TextDirection): TextBox;
    copy(): TextBox;
}
declare abstract class TreeNode<T> {
    preNode: T;
    nextNode: T;
    parentNode: T;
}
declare class TextPointParentData extends TreeNode<TextPoint> {
    index: number;
    column: number;
    get offset(): Offset;
    set offset(value: Offset);
    box: TextBox;
    broCount: number;
    wordCountWidth: number;
    baseLineOffsetY: number;
    /**
     * 在渲染上的盒子，某些特定字符与box可能不太一致
     * 例如：换行符 参考 @Paragraph.performLayoutTextOffset 方法内的  _.parentData.visualBox.width=constraints.width;
     */
    visualBox: TextBox;
}
declare class TextPoint {
    parentData: TextPointParentData;
    text: string;
    private isSpace;
    private _hidden;
    hiddenTextPoint(): void;
    disable(): void;
    enable(): void;
    get hidden(): boolean;
    constructor(text: string);
    get charCodePoint(): number;
    get isWord(): boolean;
}
interface Rowed {
    textPoints: TextPoint[];
    countWidth: number;
    maxLineHeight: number;
    minLineHeight: number;
}
declare class ParagraphParentData extends TreeNode<Paragraph> {
}
declare abstract class ParagraphControl {
    getTextPointForOffset(offset: Offset): TextPoint;
    getTextBoxesForRange(selection: TextSelection): Array<TextBox>;
}
/**
 * 段落
 */
export declare class Paragraph extends ParagraphControl {
    parentData: ParagraphParentData;
    textStyle: TextStyle;
    text: string;
    private textPoints;
    private linePoints;
    private lastTextPoint;
    private firstTextPoint;
    protected size: Size;
    get width(): number;
    get height(): number;
    pushStyle(textStyle: TextStyle): void;
    addText(text: string): void;
    /**
     * layout函数只负责将文本进行布局操作，并返回布局后的堆叠高度height和下一段文字的startOffset
     * [startOffset]表示该文本(首个文字)从此开始布局，在[TextSpan]具有children时会按此规律排序
     * 将所有文字逐个分开并通过[getMeasureText]方法获取文字数据，生成[TextBox]列表
     * 1.[performLayoutTextOffset]首次排序使用 [performLayoutRow]将所有文字按ltr方向排序成一条直线并给出每个文字的offset,同时会设置word space
     * 2.[performConstraintsWidth]约束排序，主要做换行等操作,根据文字特性判定换行规则
     * 3.[performLayoutOffsetYByColumn] 通过宽度约束行计算文字所在的y轴
     * 4.[performLayoutTextAlignment] 通过 [TextAlign] 进行对齐布局
     * 5.[performLayoutLinePoints] 对下划线进行布局，以行为单位，将行首行尾 [TextPoint] 坐标为基础计算下划线位置。
     */
    layout(constraints: ParagraphConstraints, paint: Painter, startOffset?: Offset): void;
    performLayoutLinePoints(): void;
    protected applyTextStyle(paint: Painter, callback?: (paint: Painter) => void): void;
    /**
     * 将字母合成为一个单词，并将整个单词宽度的和存储在首个字母
     */
    handleCompileWord(): void;
    getRowByColumn(rowIndex: number): Rowed;
    performLayoutTextAlignment(constraints: ParagraphConstraints): void;
    applyLayoutAlignByRow(row: Rowed, constraints: ParagraphConstraints, isLastRow?: boolean): void;
    /**
     * 约束文字宽度
     * 根据约束宽度判断文字是否超出宽度得到overflow,如果overflow>0说明超出
     * 超出后由于已经有布局过，需要将新的一行x设置为0,就必须让x加上反向增量达到0,反向增量为x的倒数
     * 文本是否为单词判断逻辑为next不为null与next的code码小于256与next不为空格即判定为一个单词
     * 区别是否一个单词时，必须满足连续字母超过一个才满足为一个"单词"
     * 每个单词的broCount至少为1，空格以及兄弟字母该属性为null
     * @param lastColumn 当前所在行数
     * @param isLastParagraph 标记是否为 [MulParagraph] 中的最后一个 [Paragraph],当为最后一段时，当前行数到达最大行数时必须立即停止向下布局。
     */
    performConstraintsWidth(constraints: ParagraphConstraints, lastSubDeltaX?: number, lastColumn?: number, maxLine?: number): {
        column: number;
        subDeltaX: number;
    };
    private replaceEllipsis;
    performLayoutOffsetYByColumn(lastHeight?: number): void;
    /**
     *  将文字处理为[TextBox]并计算每个文字的offset
     */
    performLayoutTextOffset(paint: Painter, startOffset: Offset, constraints: ParagraphConstraints): void;
    /**
     * 该方法只会出现在初始化布局时或布局单词链表对象时。在初始化时会负责将line-height、word-space计算入排版中
     * 传入一个[TextPoint],这个对象将会是渲染的第一位，接下来会一只next下去，布局的将会是从左到右进行，不会出现换行
     * next的offset将会基于前一个offset而重新计算,直至next==null 或者 到达 maRange
     */
    performLayoutRow(textPoint: TextPoint, parentOffset?: Offset, maxRange?: number, initRow?: boolean): void;
    getNextStartOffset(): Offset;
    private currentInsertTextPointIndex;
    private insertTextToList;
    private getTextBox;
    private getMeasureText;
    paint(paint: Painter, offset?: Offset, debugRect?: boolean): Offset;
    private performPaintLines;
    private performPaint;
    visitTexts(visitor: (textPoint: TextPoint) => boolean): void;
    getTextPointForOffset(offset: Offset): TextPoint;
    getTextBoxesForRange(selection: TextSelection): Array<TextBox>;
}
/**
 * 多行文本嵌套布局其实是将所有传入的 [Paragraph] (段落) 转为链表并进行后续布局。在布局时，它不会生成新的 [Paragraph] 和其他生成物，它仅仅是代理了 [Paragraph] 的
 * layout 方法。并将每个段落对象内的 [textPoint] 通过 [applyPerformLayoutConstraints] 约束分为若干行，并以行为单位进行后续布局和计算。
 *
 * 当 [Paragraph] 被作为嵌入段落传入是，意味着它本身的 [TextStyle] 会在某些情况下失效，并被 [MulParagraph] 控制。
 *
 *
 * [applyPerformLayoutHorizontalOffset] 方法将传入的文字从string转换为textPoint并横向水平布局，在该过程中不会出现任何换行，且该方法的startOffset参数是
 * 水平布局的其实坐标。当这个坐标的x不为0时，最开始的那一个文字将会从x处开始布局，并从该处开始，x将会一只递归下去直至string全部被水平布局。它是必须被调用的，
 * 往后的所有计算步骤都基于该方法的运行结果。
 *
 * [applyPerformLayoutConstraints] 方法至少接收一个 [ParagraphConstraints] 用于约束文字的最大宽度并返回约束后的文字最大行数。约束宽度决定着文字的换行时机，
 * 如果不执行该方法，所有文字将会保留水平布局状态，它是必须被调用的方法。
 *
 * [handleLevelRowsLineHeight] 方法至少接收一个最大行数参数，它需要通过这个参数获取该嵌套对象的所有文字行以便于后面更好的通过行为单位计算并抹平每行的行高和
 * 文字渲染基线偏移量。同时，这个方法内将会被计算出该嵌套文本的 [最大高度] 值，这是唯一能计算整个嵌套文本高度的方法，并且它是必须被调用的，否则文字将会塌陷为无高度box。
 *
 * [applyAlignText] 方法至少传入最大行数 [maxColumn] 和 [ParagraphConstraints]。它的作用在于它可以将指定的行通过 [textAlign] 对其。文字默认对其值是 [TextAlign.unset]
 * 即不做任何操作，也就是默认从左往右开始布局，并被宽度约束。该方法可选调用，在 [textAlign]值为 [TextAlign.unset] 不会出现明显效果。
 **/
export declare class MulParagraph extends Paragraph {
    private firstChild;
    private maxWidth;
    private maxHeight;
    constructor(children?: Paragraph[]);
    addAll(children: Paragraph[]): void;
    private addChild;
    layout(constraints: ParagraphConstraints, paint: Painter, startOffset?: Offset): void;
    private applyPerformLayoutLinePoint;
    /**
     *抹平指定Row内所有TextPoint的line-height并将具有差异的TextPoint的基线Y偏移量校准给line-height较小的一方
     *
     **/
    private handleLevelRowsLineHeight;
    private getRows;
    private applyAlignText;
    private applyPerformLayoutConstraints;
    private applyPerformLayoutHorizontalOffset;
    paint(paint: Painter, offset?: Offset, debug?: boolean): Offset;
}
/**
 * 根据推入文字和样式生成一个 [Paragraph] 对象，当在被调用 build 函数后，该builder对象将不能再被使用
 * textStyles 栈用于存储被推入样式
 * elements 栈用于存储被推入文本，并将文本与对应的样式绑定
 * **/
declare class ParagraphBuilder {
    private paragraphStyle;
    constructor(paragraphStyle: ParagraphStyle);
    private textStyles;
    private elements;
    addText(text: string): void;
    private get lastTextStyle();
    pushStyle(style: TextStyle): void;
    /**
     * 保证样式只影响到子节点，在每次将自己推入后需要立即pop，避免污染其他
     * 段落样式
     **/
    pop(): void;
    build(): Paragraph;
}
export interface TextSpanOption {
    text: string;
    textStyle: TextStyle;
    children: InlineSpan[];
}
export declare class TextSpan extends InlineSpan {
    children: InlineSpan[];
    text: string;
    paragraph: Paragraph;
    style: TextStyle;
    constructor(option: Partial<TextSpanOption>);
    build(builder: ParagraphBuilder): void;
    getSpanForPosition(offset: Accumulator): InlineSpan;
    visitChildren(visitor: InlineSpanVisitor): boolean;
    computeToPlainText(): void;
}
export declare class TextPainter extends ParagraphControl {
    private text;
    private preTextSpan;
    private paragraph;
    private painter;
    size: Size;
    get width(): number;
    get height(): number;
    constructor(text: TextSpan, painter?: Painter);
    private createParagraph;
    layout(minWidth?: number, maxWidth?: number): void;
    paint(paint: Painter, offset?: Offset, debug?: boolean): void;
    private isEqualsTextSpan;
    static isSpace(codePoint: number): boolean;
    static getRowsByArray(arr: TextPoint[]): Map<number, Rowed>;
    static getRowsByNodeTree(startTextPoint: TextPoint): Map<number, Rowed>;
    static isNewline(codePoint: number): boolean;
    getTextPointForOffset(offset: Offset): TextPoint;
    getTextBoxesForRange(selection: TextSelection): Array<TextBox>;
}
export {};
