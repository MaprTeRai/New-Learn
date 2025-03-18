document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const submittedList = document.getElementById('submittedList');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        // ตรวจสอบการป้อนข้อมูล
        if (name === '' || email === '' || phone === '' || message === '') {
            alert('กรุณากรอกข้อมูลให้ครบทุกช่อง!');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('กรุณากรอกอีเมลที่ถูกต้อง!');
            return;
        }

        if (!/^\d+$/.test(phone)) {
            alert('เบอร์โทรศัพท์ต้องเป็นตัวเลขเท่านั้น!');
            return;
        }

        // เพิ่มข้อมูลที่กรอกลงในรายการ
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${name} - ${subject} (${email}, ${phone})</span>
            <button class="delete-button">ลบ</button>
        `;

        // ทำเครื่องหมายว่า "เสร็จแล้ว"
        listItem.addEventListener('click', function () {
            this.classList.toggle('completed');
        });

        // ลบข้อมูล
        listItem.querySelector('.delete-button').addEventListener('click', function (event) {
            event.stopPropagation();
            if (confirm('ต้องการลบข้อมูลนี้ใช่หรือไม่?')) {
                listItem.remove();
            }
        });

        submittedList.appendChild(listItem);

        // รีเซ็ตฟอร์ม
        contactForm.reset();
    });
});
