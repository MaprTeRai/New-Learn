function sendMessage() {
    let message = document.getElementById("message").value; // ดึงค่าจากกล่องข้อความ
    if (message.trim() === "") {
        alert("กรุณาพิมพ์ข้อความก่อนส่ง!"); 
    } else {
        alert("คุณส่งข้อความว่า: " + message); 
        console.log("ข้อความที่ส่ง:", message); // แสดงใน Console (F12)
    }
}