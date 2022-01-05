// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mybatislog.format" is now active!');


	const COLUMN = "<==    Columns:";
	const ROW = "<==        Row:";


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('mybatislog.format', function () {
		// The code you place here will be executed every time your command is executed
		console.log("hello world!")
		const {editor, document, selection} = vscode.window.activeTextEditor
		
		const text = document.getText(selection)
		const lines = text.split("\n")
		const array = []
		let columnNameList = [];

		lines.forEach(line => {
			if(line.startsWith(COLUMN)){
				const temp = line.substring(COLUMN.length).split(",")
				columnNameList = temp;
			}else if(line.startsWith(ROW)){
				const temp = line.substring(ROW.length).split(",")
				const json = {};
				for(let i=0;i<temp.length;i++) {
					json[columnNameList[i].trim()] = temp[i].trim();
				}
				array.push(json);
			}else{
				return
			}

		})
		console.log(columnNameList)
		console.log("----------------------------")
		console.log(array)

		if(array.length > 0){
			const activeTextEditor = vscode.window.activeTextEditor;
			activeTextEditor.edit(editBuilder => {
				const textJson = JSON.stringify(array, null, 2);
				editBuilder.replace(selection, textJson);
			});
			vscode.window.showInformationMessage('格式化完成');
		}else {
			vscode.window.showInformationMessage('格式无法识别');
		}

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from mybatisLogFormat!');
		
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
