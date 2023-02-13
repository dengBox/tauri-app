pub struct Random {
}

use rand::Rng;
impl Random {
    fn generate_nums (&self, num: u32) -> Vec<u32> {
        let mut _all_nums = vec![];
        for i in 1..num {
            _all_nums.push(i)
        }
        return _all_nums
    }
    pub fn grand_lotto (&self) -> Vec<u32> {
        let mut number = 0;
        let mut result_list = vec![];
        let mut red_list = self.generate_nums(36);
        let mut blue_list = self.generate_nums(13);
        
        // let mut _all_nums = self.generate_nums(36);
        while number < 7 {
            let new_num;
            if number < 5 {
                new_num = rand::thread_rng().gen_range(1..red_list.len()) as u32;
                red_list = red_list.into_iter().filter(|&x| x != new_num).collect();
            } else {
                new_num = rand::thread_rng().gen_range(1..blue_list.len()) as u32;
                blue_list = blue_list.into_iter().filter(|&x| x != new_num).collect();
            }
            result_list.push(new_num);
            number += 1;
        }
        return result_list;
    }
    // fn find_num (list: Vec<i32>, num: i32) -> bool {
    //    for i in  list.iter() {
    //     print!("{}", i);
    //    }
    //    return true
    // }
}
