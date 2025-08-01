use rdev::{listen, simulate, Event, EventType};
use std::{thread, time};

// -> ListenError |&'static str
pub fn listen_event () {
    if let Err(error) = listen(callback) {
        println!("Error: {:?}", error);
        // return error
    }

    fn callback(event: Event) {
        println!("My callback {:?}", event);
       let event_instance= match event.name {
            Some(string) => println!("User wrote {:?}", string),
            None => (), // _
        };

        return event_instance
    }
    // return "start listen keyboard event success"
}

pub fn send_key_event (event_type: &EventType) {
    let delay = time::Duration::from_millis(10);
    match simulate(event_type) {
        Ok(()) => (),
        Err(_simulate_error) => {
            println!("We could not send {:?}", event_type);
        }
    }
    // Let ths OS catchup (at least MacOS)
    thread::sleep(delay);
}
