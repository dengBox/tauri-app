#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[path="helper/random.rs"]
mod random;
use crate::random::Random;

#[tauri::command]
fn count_random() -> Vec<u32> {
  return Random {}.grand_lotto();
}


fn main() {
  let context = tauri::generate_context!();
  tauri::Builder::default()
    // This is where you pass in your commands
    .invoke_handler(tauri::generate_handler![count_random])
    .menu(tauri::Menu::os_default(&context.package_info().name))
    .run(context)
    .expect("error while running tauri application");
}
