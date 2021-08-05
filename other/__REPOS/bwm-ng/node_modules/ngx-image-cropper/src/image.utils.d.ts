export declare class ImageUtils {
    static getOrientation(imageBase64: string): number;
    private static base64ToArrayBuffer(imageBase64);
    static resetOrientation(srcBase64: string, srcOrientation: number, callback: Function): void;
    private static transformCanvas(ctx, orientation, width, height);
}
