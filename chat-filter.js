// ==UserScript==
// @name         GeoFS Chat Filter
// @namespace    http://tampermonkey.net/
// @version      1
// @description  make MRP Callsigns stand-out!
// @author       Massiv4515
// @match        https://www.geo-fs.com/geofs.php?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

(function () {
    console.log("[ChatMod] Started with toggle");

    let enabled = true; // filtering is on by default

    // Mapping keywords to colors
    const colorMap = {
        "RAF": "pink",
        "UAC": "red",
        "USSR": "yellow",
        "UAEAF": "magenta",
        "RNZAF": "lightgreen",
        "USAF": "cyan",
        "SHL": "#5A5AFC",
        "RNLAF": "orange",
        "AEF": "#C8F94A",
        "U": "lightcoral",
        "UTP": "lightcoral",
        "P": "lightcoral",
        "PMC": "lightcoral"
    };

    const keywords = [
        "[U]", "[UTP]", "[P]", "[PMC]", "[NKG-KG]", "[SHL]", "[NFS]", "[AEF]", "[WANK]", "[NIUF]", "[RNLAF]", "[RNZAF]", "[USAF]", "[RAAF]",
        "[TUAF]", "[TASC]", "[UAC]", "[UAEAF]", "[USSR]", "[BAF]", "[PAF]",
        "[RAF]", "(U)", "(UTP)", "(P)", "(NKG-KG)", "(PMC)", "(RNLAF)", "(AEF)",
        "(RNZAF)", "(SHL)", "(NFS)", "(RAAF)", "(USAF)", "(TUAF)",
        "(TASC)", "(UAC)", "(UAEAF)", "(USSR)", "(BAF)", "(WANK)", "(NIUF)",
        "(PAF)", "(RAF)"
    ];

    // Add toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "ChatMod: ON";
    Object.assign(toggleBtn.style, {
        position: "fixed",
        top: "10px",
        right: "25%",
        zIndex: 9999,
        padding: "5px 10px",
        background: "#222",
        color: "white",
        border: "1px solid #555",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "12px"
    });
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        enabled = !enabled;
        toggleBtn.innerText = enabled ? "ChatMod: ON" : "ChatMod: OFF";
        reprocessAllMessages();
    });

    function processChatMessage(msg) {
        const label = msg.querySelector("b.label");
        if (!label) return;

        const callsign = label.getAttribute("callsign") || "";

        // Reset to default if disabled
        if (!enabled) {
            label.style.display = "";
            label.style.color = "";
            msg.style.color = "";
            return;
        }

        let matchedKeyword = null;

        if (label.classList.contains("myself")) {
            label.style.color = "light blue";
            return;
        }

        for (const key of keywords) {
            if (callsign.toUpperCase().includes(key.toUpperCase())) {
                matchedKeyword = key.replace(/[\[\]\(\)]/g, "");
                break;
            }
        }

        if (matchedKeyword) {
            label.style.display = "";
            label.style.color = colorMap[matchedKeyword] || "#d3d3d3";
        } else {
            label.style.display = "none";
            msg.style.color = "black";
        }
    }

    function reprocessAllMessages() {
        document.querySelectorAll(".geofs-chat-message").forEach(processChatMessage);
    }

    // MutationObserver for new messages
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && node.classList.contains("geofs-chat-message")) {
                    processChatMessage(node);
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    console.log("[ChatMod] Ready with toggle");
})();
