import { Plugin, MarkdownView } from 'obsidian';

export default class PasteThatShizz extends Plugin {

	async onload() {
		console.log('loading Paste that Shizz')


		this.addCommand({
			id: 'paste-that-shizz',
			name: 'Paste!',
			callback: async () => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView)
				if (view) {
					const editor = view.editor
					const clipboardText = await navigator.clipboard.readText()
					editor.replaceSelection(clipboardText)
				}
			},
			
		})

	}
	onunload() {
		console.log('unloading Paste that Shizz');
	}



