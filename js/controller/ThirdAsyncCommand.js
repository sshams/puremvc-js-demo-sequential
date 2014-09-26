/*
 PureMVC MultiCore Demo for JS - Sequential
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "controller.ThirdAsyncCommand",
    parent: puremvc.asynccommand.AsyncCommand
},
{
    execute: function(notification) {
        var logMessage = "STARTING THIRD ASYNC COMMAND...";
        this.facade.sendNotification(view.OutputMediator.LOG_OUTPUT, logMessage);
        var self = this;
        window.setTimeout(function(){
            self.onTimer.call(self);
        }, 5000);
    },
    
    onTimer: function() {
        var logMessage = "THIRD ASYNC COMMAND COMPLETE";
        this.facade.sendNotification(view.OutputMediator.LOG_OUTPUT, logMessage);
        this.commandComplete();
    }
},
{
}
);