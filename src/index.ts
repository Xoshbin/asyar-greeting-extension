import type { Extension, ExtensionContext } from "asyar-sdk";
import DefaultView from "./DefaultView.svelte";

class MyExtension implements Extension {
  private extensionManager?: any;

  async initialize(context: ExtensionContext) {
    this.extensionManager = context.getService("ExtensionManager");
    console.log("Greetings initialized!");
  }

  async activate(): Promise<void> {}
  async deactivate(): Promise<void> {}
  async viewActivated(viewId: string): Promise<void> {}
  async viewDeactivated(viewId: string): Promise<void> {}
  
  async executeCommand(commandId: string, args?: Record<string, any>): Promise<any> {
    if (commandId === "open") {
      this.extensionManager?.navigateToView("org.asyar.greeting/DefaultView");
      return {
        type: "view",
        viewPath: "org.asyar.greeting/DefaultView",
      };
    }
  }
  
  onUnload = () => {};
}

export default new MyExtension();
export { DefaultView };
