    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.height = "100%";
    document.body.style.backgroundColor = "black";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";

    const tb = document.getElementById("tb");
    tb.style.display = "flex";
    tb.style.alignItems = "center";
    tb.style.gap = "8px";
    tb.style.fontSize = "24px";
    tb.style.color = "white";
    tb.style.marginBottom = "4px";

    const subtxt = document.getElementById("subtxt");
    subtxt.style.fontSize = "14px";
    subtxt.style.color = "#ccc";
    subtxt.style.marginBottom = "16px";

    const os = document.getElementById("os");
    os.style.backgroundColor = "#444";
    os.style.padding = "20px";
    os.style.borderRadius = "60px";
    os.style.boxShadow = "0 0 40px rgba(0, 0, 0, 0.8)";

    const dt = document.getElementById("dt");
    dt.style.width = "240px";
    dt.style.height = "480px";
    dt.style.backgroundColor = "#222";
    dt.style.borderRadius = "40px";
    dt.style.padding = "0";
    dt.style.display = "flex";
    dt.style.flexDirection = "column";
    dt.style.justifyContent = "space-between";
    dt.style.position = "relative";

    const ti = document.getElementById("ti");
    ti.style.position = "absolute";
    ti.style.top = "30px";
    ti.style.left = "0";
    ti.style.right = "0";
    ti.style.padding = "0 20px";
    ti.style.display = "flex";
    ti.style.justifyContent = "space-between";
    ti.style.fontSize = "20px";
    ti.style.color = "white";
    ti.style.zIndex = "2";

    const mh = document.getElementById("mh");
    mh.style.flex = "1";
    mh.style.overflow = "hidden";
    mh.style.display = "flex";
    mh.style.alignItems = "center";
    mh.style.justifyContent = "center";
    mh.style.margin = "0";
    mh.style.padding = "0";
    mh.style.borderRadius = "0";
    mh.style.background = "transparent";

    const img = document.getElementById("goofselfie");
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.borderRadius = "20%";
    img.style.objectFit = "cover";

    const btn = document.getElementById("btn");
    btn.style.display = "flex";
    btn.style.justifyContent = "space-around";
    btn.style.alignItems = "center";
    btn.style.height = "60px";
    btn.style.marginTop = "12px";

    const choi = document.getElementById("choi");
    const chup = document.getElementById("chup");
    const ls = document.getElementById("ls");

    [choi, ls].forEach(button => {
      button.style.fontSize = "24px";
      button.style.color = "orange";
    });

    chup.style.width = "60px";
    chup.style.height = "60px";
    chup.style.backgroundColor = "white";
    chup.style.borderRadius = "50%";
    chup.style.border = "5px solid black";

    const bb = document.getElementById("bb");
    bb.style.textAlign = "center";
    bb.style.marginTop = "10px";
    bb.style.color = "white";
    bb.style.fontSize = "13px";

    const da = document.getElementById("da");
    da.style.fontSize = "18px";
    da.style.marginTop = "3px";