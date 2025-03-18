document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addTask');
    const newItemInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = newItemInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="delete-button">ลบ</button>
            `;

            // ทำเครื่องหมายว่างานเสร็จแล้ว
            listItem.addEventListener('click', function () {
                this.classList.toggle('completed');
            });

            // ลบรายการ
            listItem.querySelector('.delete-button').addEventListener('click', function (event) {
                event.stopPropagation();
                if (confirm('ต้องการลบรายการนี้ใช่หรือไม่?')) {
                    listItem.remove();
                }
            });

            taskList.appendChild(listItem);
            newItemInput.value = '';
        }
    }

    // กดปุ่มเพื่อเพิ่มงาน
    addButton.addEventListener('click', addTask);

    // กด Enter เพื่อเพิ่มงาน
    newItemInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
