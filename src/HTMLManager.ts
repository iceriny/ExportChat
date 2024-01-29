import { EC_SendLocal, getCurrentTime } from "./Utilities";

interface ITagsStage {
    content: string;
    isDelete: boolean;
    type: TagsType;
}

enum TagsType {
    class,
    ID
}
export class HTMLManager {
    myStyle: { fontSize: string, fontFamily: string, display: string, flexDirection: string, width: string } = {
        fontSize: "28.672px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        width: "70vw"
    }

    target: HTMLElement | null = null;

    category_processing: ITagsStage[] = [
        {
            content: "bce-notification",
            isDelete: true,
            type: TagsType.class
        }, {
            content: "ChatMessageNonDialogue",
            isDelete: true,
            type: TagsType.class
        }, {
            content: "bce-line-icon-wrapper",
            isDelete: true,
            type: TagsType.class
        }
    ]


    constructor() {

    }

    getTags(): void {
        this.target = document.getElementById("TextAreaChatLog");
        if (this.target != null) {
            EC_SendLocal("找的聊天记录标签开始处理...")
        }
        else {
            EC_SendLocal("出错，未找到聊天记录标签")
        }
    }

    handleTags(): HTMLElement {
        // 克隆源元素
        const clonedElement = this.target?.cloneNode(true) as HTMLElement;
        let removeElements: HTMLElement[] = [];

        for (let item of this.category_processing) {
            if (item.isDelete == true) {
                if (item.type == TagsType.class) {
                    clonedElement?.querySelectorAll(`.${item.content}`).forEach((element) => {
                        removeElements.push(element as HTMLElement);
                    });
                }
                else if (item.type == TagsType.ID) {
                    clonedElement?.querySelectorAll(`#${item.content}`).forEach((element) => {
                        removeElements.push(element as HTMLElement);
                    });
                }
            }
        }

        if (removeElements.length > 0) {
            for (let item of removeElements) {
                this.target?.removeChild(item);
            }
        }
        else {
            EC_SendLocal("没有找到需要处理的标签")
        }

        clonedElement.style.fontSize = this.myStyle.fontSize;
        clonedElement.style.fontFamily = this.myStyle.fontFamily;
        clonedElement.style.display = this.myStyle.display;
        clonedElement.style.flexDirection = this.myStyle.flexDirection;
        clonedElement.style.width = this.myStyle.width;
        return clonedElement;
    }

    generatePage(): void {
        // Step 1: 处理标签内容
        const contentTags = this.handleTags();

        const title: string = `调教记录${getCurrentTime()}`

        // Step 2: 创建新的 HTML 文件内容
        const htmlContent = `<html><head><title>${title}</title></head><body style="display: flex;align-items: center;justify-content: center;background-color: #f2f2f2;">${contentTags}</body></html>`;
        // Step 3: 创建 Blob 对象
        const blob = new Blob([htmlContent], { type: 'text/html' });

        // Step 4: 创建下载链接
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `${title}.html`;

        // Step 5: 触发下载
        document.body.appendChild(link);
        link.click();

        // 清理
        document.body.removeChild(link);
    }
}