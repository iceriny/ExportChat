import { HTMLManager } from "./HTMLManager";
import { EC_SendLocal } from "./Utilities";

export class CommandsManager {
	constructor() {
		this.init();
	}

	init(): void {
		CommandCombine([
			// {
			// 	Tag: 'echat',
			// 	Description: "or <b>/echat help</b> : Opens the help for ExportChat commands",
			// 	AutoComplete(parsed, low, msg) {

			// 	},
			// 	Action: (args, msg, parsed) => {
			// 		if (parsed.length <= 0) {
			// 			this.getSubcommand("help")!.Action!("", msg, []);
			// 		} else {
			// 			var command = this.getSubcommand(parsed[0]);
			// 			var subArgs = parsed.slice(1);
			// 			command?.Action!(subArgs.join(" "), msg, subArgs)
			// 		}
			// 	}
			// },
			{
				Tag: 'exportlog',
				Description: ": 导出当前聊天室的全部内容",
				Action: () => {
					const M: HTMLManager = new HTMLManager();
					M.getTags();
					M.generatePage()
				}
			}
		]);
	}

	ecCommands: ICommand[] = [
		{
			Tag: "help",
			Description: ": 显示导出聊天室记录的命令帮助.",
			Action: (args, msg, parsed) => {
				let helpLines: string[] = [];
				this.orderedCommands.forEach(c => {
					helpLines.push(`<br><b>/ec ${c.Tag}</b> ${c.Description}`);
				})
				let helpText = `<b>- 导出聊天室记录的命令帮助 -</b>${helpLines.join()}`;
				EC_SendLocal(helpText);
			},
		}, {
			Tag: 'exportlog',
			Description: ": 导出当前聊天室的全部内容",
			Action: () => {
				const M: HTMLManager = new HTMLManager();
				M.getTags();
				M.generatePage()
			}
		},
	];

	get orderedCommands(): ICommand[] {
		var helpCommand = this.getSubcommand("help")!;
		var sorted = this.ecCommands.filter(c => c.Tag != "help").sort((a, b) => a.Tag.localeCompare(b.Tag));
		return [helpCommand, ...sorted];
	}

	get subCommands(): string[] {
		return this.orderedCommands.map(c => c.Tag);
	}

	getSubcommand(name: string): ICommand | undefined {
		return this.ecCommands.find(c => c.Tag.toLocaleLowerCase() == name.toLocaleLowerCase());
	}
}
