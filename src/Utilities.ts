export function EC_SendLocal(msg: string, time?: number) {
	var bgColor = (Player.ChatSettings!.ColorTheme!.indexOf("Light") > -1) ? "#F6D7E0" : "#522340";
	let text = `<div style='background-color:${bgColor};'>${msg}</div>`;
	ChatRoomSendLocal(text);
}

export function getCurrentTime(): string {
	const currentDate = new Date();
  
	const hours = currentDate.getHours().toString().padStart(2, '0');
	const minutes = currentDate.getMinutes().toString().padStart(2, '0');
	const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  
	return `${hours}:${minutes}:${seconds}`;
  }