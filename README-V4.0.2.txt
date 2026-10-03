Money Goals V4.0.2 — Cross-device Sync Fix

แก้ไข:
- GET จาก Apps Script มี timeout 12 วินาที ไม่ค้าง "กำลังซิงก์..." ตลอด
- Service Worker cache ใหม่ V4.0.2 และลบ cache รุ่นเก่า
- ไม่ cache Apps Script / googleusercontent
- บังคับตรวจ Service Worker ใหม่ด้วย updateViaCache:none
- เปิดแอป/กลับเข้าแอปจะดึงข้อมูลข้ามเครื่องใหม่
- เพิ่มเวอร์ชัน V4.0.2 ในหน้าตั้งค่า
- Code.gs คง action ของ V4.0.1 ครบ และเพิ่ม serverTime

ติดตั้ง:
1) วาง Code.gs ทับ Apps Script > Save > Manage deployments > Edit > New version > Deploy
2) เปิด /exec ตรวจ apiVersion = 4.0.2
3) อัปไฟล์เว็บทั้งหมด (ยกเว้น Code.gs/README) ทับ GitHub
4) Android: เปิดเว็บใน Chrome และ Refresh 1-2 ครั้ง
   ถ้า Home Screen เดิมยังเปิดรุ่นเก่า ให้ลบเฉพาะไอคอน Money Goals แล้ว Add to Home screen/Install ใหม่
5) iPad/iPhone: เปิด Safari Refresh แล้วเปิดจาก Home Screen ใหม่
