/**
 * ฟังก์ชันแปลงค่า Alien Numeral เป็น Integer
 * @param {string} numeralString - ค่า Input ที่รับเข้ามา (เช่น "RCRZCAB")
 * @return {number} - ผลลัพธ์ตัวเลข
 */
function alienToInt(numeralString) {
  const values = {
    A: 1,
    B: 5,
    Z: 10,
    L: 50,
    C: 100,
    D: 500,
    R: 1000,
  };

  let total = 0;

  for (let i = 0; i < numeralString.length; i++) {
    let current = values[numeralString[i]];
    let next = values[numeralString[i + 1]];

    // ถ้าตัวหน้า น้อยกว่า ตัวหลัง ให้ลบ (เช่น AB คือ 5-1)
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

// --- Test Cases ---
console.log("--- Start Testing ---");

console.log("Test 1 (AAA):", alienToInt("AAA")); // Expected: 3
console.log("Test 2 (LBAAA):", alienToInt("LBAAA")); // Expected: 58
console.log("Test 3 (RCRZCAB):", alienToInt("RCRZCAB")); // Expected: 1994
