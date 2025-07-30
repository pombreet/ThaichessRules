document.addEventListener('DOMContentLoaded', () => {
    // เลือก Element ที่เกี่ยวข้องทั้งหมด
    const options = document.querySelectorAll('.character-option');
    const detailsBox = document.getElementById('details-box');

    // ฟังก์ชันสำหรับจัดการการเลือก
    function selectOption(event) {
        const selectedOption = event.currentTarget;
        const isAlreadySelected = selectedOption.classList.contains('selected');

        // ลบคลาส 'selected' ออกจากทุกตัวเลือกก่อน
        options.forEach(opt => {
            opt.classList.remove('selected');
        });

        // ถ้าคลิกที่ตัวเลือกใหม่
        if (!isAlreadySelected) {
            // เพิ่มคลาส 'selected' ให้กับตัวเลือกที่ถูกคลิก
            selectedOption.classList.add('selected');

            // ดึงข้อมูลจาก data-attributes
            const charName = selectedOption.dataset.name;
            const charDesc = selectedOption.dataset.description;

            // อัปเดตเนื้อหาในกล่องรายละเอียด
            detailsBox.innerHTML = `
                <h3>${charName}</h3>
                <p>${charDesc}</p>
            `;
            
            // แสดงกล่องรายละเอียด
            detailsBox.classList.remove('hidden');
        } else {
            // ถ้าคลิกที่ตัวเลือกเดิมที่ถูกเลือกอยู่แล้ว ให้ยกเลิกการเลือก
            // และซ่อนกล่องรายละเอียด
            detailsBox.classList.add('hidden');
        }
    }

    // วนลูปเพื่อเพิ่ม Event Listener 'click' ให้กับทุกตัวเลือก
    options.forEach(option => {
        option.addEventListener('click', selectOption);
    });
});