export class StringUtils {
    public static getSubstring(str: string, subStr: string): string {
        let resultStr: string = "";
        let subStrIndex = str.indexOf(subStr);

        if (subStrIndex !== -1) {
            resultStr = str.substring(subStrIndex, subStrIndex + subStr.length);
        }

        return resultStr;
    }
}