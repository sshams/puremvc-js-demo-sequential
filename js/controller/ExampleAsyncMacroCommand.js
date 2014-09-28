/*
 PureMVC MultiCore Demo for JS - Sequential
 Copyright(c) 2014 Saad Shams
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "controller.ExampleAsyncMacroCommand",
    parent: puremvc.asynccommand.AsyncMacroCommand
},
{
    initializeAsyncMacroCommand: function() {
        var self = this;
        this.setOnComplete(function(){self.onComplete()});
        
        this.addSubCommand(controller.FirstAsyncCommand);
        this.addSubCommand(controller.SecondAsyncCommand);
        this.addSubCommand(controller.ExampleSimpleCommand);
        this.addSubCommand(controller.ThirdAsyncCommand);
        this.addSubCommand(controller.ExampleSimpleCommand);
    },
    
    onComplete: function() {
        var logMessage = "AsyncMacroCommand COMPLETE";
        this.facade.sendNotification(view.OutputMediator.LOG_OUTPUT, logMessage);
    }
},
{
}
);