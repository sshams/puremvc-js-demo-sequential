/*
 PureMVC MultiCore Demo for JS - Sequential
 Copyright(c) 2014 Saad Shams <saad.shams@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
puremvc.define(
{
    name: "controller.ExampleSimpleCommand",
    parent: puremvc.SimpleCommand
},
{
    execute: function(notification) {
        var logMessage = "SIMPLE (SYNCHRONOUS) COMMAND COMPLETE";
        this.facade.sendNotification(view.OutputMediator.LOG_OUTPUT, logMessage);
    }
},
{
}
);