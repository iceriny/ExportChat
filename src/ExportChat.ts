import bcModSDKRef from "bondage-club-mod-sdk";
import { CommandsManager } from "./commands";

const EC_Version : string = "0.0.1"

export const bcModSDK = bcModSDKRef.registerMod({
    name: "ExportChat",
    fullName: "package.json",
    version: EC_Version,
    repository: "https://github.com/iceriny/ExportChat"
});
function initWait() {
    console.debug("ExportChat: Init wait");
    if (CurrentScreen == null || CurrentScreen === "Login") {
        bcModSDK.hookFunction("LoginResponse", 0, (args, next) => {
            console.debug("ExportChat: Init LoginResponse caught", args);
            next(args);
            const response = args[0];
            if (response && typeof response.Name === 'string' && typeof response.AccountName === 'string') {
                init();
            }
        });
        console.log(`ExportChat Ready!`);
    } else {
        console.debug("ExportChat: Already logged in, init");
        init();
    }
}

function init() {
    console.debug("EC-  Init");
    const cmManager: CommandsManager = new CommandsManager();
}

initWait()