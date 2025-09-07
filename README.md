# GeoFS ChatMod

This project customizes the **GeoFS in-game chat** for the **Military Roleplay (MRP) community**.  
It makes callsigns easier to read by **color-coding different forces**, hiding invalid callsigns, and giving players a toggle option to quickly enable/disable the script.  

---

## Features

- **Force-based Colors**: Each military force gets its own callsign color for quick recognition.  
- **Invalid/Non-MRP Callsigns**: Hidden, but their messages are still visible (shown in **black**).  
- **Toggle Button**: A switch is added at the top-right corner to quickly turn the script on/off without reloading.  
- **Customizable**: The force names and their colors can be updated anytime as the MRP community evolves.  

---

## In-Game Screenshots
<img width="1919" height="828" alt="Screenshot 2025-09-07 164253" src="https://github.com/user-attachments/assets/9e985e0e-5000-46c0-ae3f-f31efe4c3e81" />

---

## Force Colors

| Force   | Color       |
|---------|-------------|
| RAF     | Pink        |
| UAC     | Red         |
| USSR    | Yellow      |
| UAEAF   | Magenta     |
| RNZAF   | Light_Green |
| USAF    | Cyan        |
| SHL     | #5A5AFC     |
| RNLAF   | Orange      |
| AEF     | #C8F94A     |
| Invalid / Non-MRP | Black (message text only) |
| Valid / UTP / PMC | Light_Coral               |

**Note**: These colors are not fixed forever — they need to be updated as new forces emerge or change.

---

## Special Notes

<img width="1919" height="869" alt="Screenshot 2025-09-07 165918" src="https://github.com/user-attachments/assets/3af1c054-b806-4ed4-b59c-38c3eb010a32" />

- Please help by keeping this list updated as new forces emerge or old ones get derecognised.  
> ⚠️ During rebellions or special events, you may need to manually add **specific callsigns** or their **colors** to the script for the best experience. We encourage players to contribute updates so everyone benefits.

---

## How to Use

### Method 1: Quick Run (for testing)
1. Open GeoFS in your browser.  
2. Open **Developer Console** (`F12` → Console tab).  
3. Copy the JavaScript code[mandatorily line 12 onwards] from `chat-filter.js` and paste it into the console.  
4. Hit **Enter** → The missile list panel appears on your screen.

### Method 2: Permanent Install (Tampermonkey) — *Recommended*
This is the **RECOMMENDED** method!   
Learn Here: https://www.youtube.com/watch?v=c4m8PMzWa_8   

Copy the whole code within `missile-panel.js` to paste it into TamperMonkey. 

---

## Contributing

- Help keep the **force names and colors updated**.  
- Add support for **new forces or rebellion callsigns**.  
- Found a bug? Open an issue or submit a pull request.  

I’d love to see improvements from the community!  

---

## License
This project is licensed under the **MIT License** — you are free to use, modify, and share with attribution.  

---

## Author
**MASSIV4515**  
_For the GeoFS Military Roleplay community_  

Discord: **massiv4515**  
Email: **massiv4515@gmail.com**
