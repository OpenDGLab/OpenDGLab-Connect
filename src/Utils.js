export function fireChange(eventName) {
    var event;
    if(document.createEvent){
        event = document.createEvent("HTMLEvents");
        event.initEvent(eventName, true, true);
        event.eventName = eventName;
        window.dispatchEvent(event);
    } else {
        event = document.createEventObject();
        event.eventName = eventName;
        event.eventType = eventName;
        window.fireEvent("on" + event.eventType, event);
    }
}