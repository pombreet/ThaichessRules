document.addEventListener('DOMContentLoaded', () => {
    // เลือก Element ที่เป็นตัวเลือกทั้งหมด
    const options = document.querySelectorAll('.character-option');

    // ฟังก์ชันสำหรับจัดการการเลือก
    function selectOption(event) {
        // ลบคลาส 'selected' ออกจากทุกตัวเลือกก่อน
        options.forEach(opt => {
            opt.classList.remove('selected');
        });

        // จากนั้น เพิ่มคลาส 'selected' ให้กับตัวเลือกที่ถูกคลิกเท่านั้น
        // 'this' ในที่นี้คือ element ที่ถูกคลิก
        this.classList.add('selected');
    }

    // วนลูปเพื่อเพิ่ม Event Listener 'click' ให้กับทุกตัวเลือก
    options.forEach(option => {
        option.addEventListener('click', selectOption);
    });
});