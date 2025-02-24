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


// send_key_event(&EventType::KeyPress(Key::KeyS));
// send_key_event(&EventType::KeyRelease(Key::KeyS));

// send_key_event(&EventType::MouseMove { x: 0.0, y: 0.0 });
// send_key_event(&EventType::MouseMove { x: 400.0, y: 400.0 });
// send_key_event(&EventType::ButtonPress(Button::Left));
// send_key_event(&EventType::ButtonRelease(Button::Right));
// send_key_event(&EventType::Wheel {
//     delta_x: 0,
//     delta_y: 1,
// });