/*
 PureMVC MultiCore Demo for JS - Sequential
 Copyright(c) 2014 Saad Shams
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "controller.FirstAsyncCommand",
    parent: puremvc.asynccommand.AsyncCommand
},
{    
    execute: function(notification) {
        var logMessage = "STARTING FIRST ASYNC COMMAND...";
        this.facade.sendNotification(view.OutputMediator.LOG_OUTPUT, logMessage);
        
        var self = this;
        window.setTimeout(function(){
            self.onTimer();
        }, 5000);
    },
    
    onTimer: function() {
        var logMessage = "FIRST ASYNC COMMAND COMPLETE";
        this.facade.sendNotification(view.OutputMediator.LOG_OUTPUT, logMessage);
        this.commandComplete();
    }
},
{
}
);