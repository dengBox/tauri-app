use tauri::{AppHandle, Emitter, Manager};
use std::{thread, time};
// --------------command------------------
// #[path = "helper/random.rs"]

mod helper;
use crate::helper::random::Random;

#[tauri::command]
fn count_random() -> Vec<u32> {
    return Random{}.grand_lotto();
}

use crate::helper::keyboard::listen_event;
#[tauri::command]
fn start_listen_event() {
    listen_event()
}

use crate::helper::keyboard::send_key_event;

use rdev::{EventType, Key};
struct FrontendEvent<'a> {
    code: Key,
    label: &'a str

}
#[tauri::command]

fn send_event(code: Vec<f64>, app: AppHandle) {
    println!("start code {:?}", code);
    let point_list = [
        FrontendEvent { code: Key::Num1, label: "1" },
        FrontendEvent { code: Key::Num2, label: "2" },
        FrontendEvent { code: Key::Num3, label: "3" },
        FrontendEvent { code: Key::Num4, label: "4" },
        FrontendEvent { code: Key::Num5, label: "5" },
        FrontendEvent { code: Key::Num6, label: "6" },
        FrontendEvent { code: Key::Num7, label: "7" },
        FrontendEvent { code: Key::Num8, label: "8" },
        FrontendEvent { code: Key::Num9, label: "9" },
        FrontendEvent { code: Key::Num0, label: "0" }
    ];
    let delay = time::Duration::from_millis(20);
    let mut index_i = 0;
    
    while index_i < 10 {
        let mut index_x = 0;
        while index_x < 10 {
            let mut index_y = 0;
            while index_y < 10 {
                let mut index_z = 0;
                while index_z < 10 {
                    send_key_event(&EventType::KeyPress(point_list[index_i].code));
                    send_key_event(&EventType::KeyPress(point_list[index_x].code));
                    send_key_event(&EventType::KeyPress(point_list[index_y].code));
                    send_key_event(&EventType::KeyPress(point_list[index_z].code));
                    send_key_event(&EventType::KeyPress(Key::Return));
                    thread::sleep(delay);
                    println!("we send_event {:?}", [point_list[index_i].label, point_list[index_x].label, point_list[index_y].label, point_list[index_z].label]);
                    app.emit("send_event", [point_list[index_i].label, point_list[index_x].label, point_list[index_y].label, point_list[index_z].label]).unwrap();
                    index_z += 1;
                }
                index_y += 1
            }
            index_x +=  1;
        }
        index_i += 1;
        let _ = app.emit("send_end", {});
    }
}

// --------------global-config---------------

fn show_window(app: &AppHandle) {
    let windows = app.webview_windows();

    windows
        .values()
        .next()
        .expect("Sorry, no window found")
        .set_focus()
        .expect("Can't Bring Window to Focus");
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| {
            let _ = show_window(app);
        }))
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            count_random,
            start_listen_event,
            send_event
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
