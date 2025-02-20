// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[path = "helper/random.rs"]
mod random;
use crate::random::Random;

#[tauri::command]
fn count_random() -> Vec<u32> {
    return Random {}.grand_lotto();
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![count_random])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
