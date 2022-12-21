if (typeof ws___ !== 'undefined') ws___.close();
ws___ = new WebSocket("ws://localhost:8080");
ws___.onopen = function (e) {
    id___ = setInterval(function () {
        const x = document.querySelector("body > div.index_app_3Qs6X > div > div.gui_body-wrapper_-N0sA.box_box_2jjDp > div > div.gui_stage-and-target-wrapper_69KBf.box_box_2jjDp > div.stage-wrapper_stage-wrapper_2bejr.box_box_2jjDp > div.stage-wrapper_stage-canvas-wrapper_3ewmd.box_box_2jjDp > div > div.stage_stage_1fD7k.box_box_2jjDp > div.stage_monitor-wrapper_2w6m8.box_box_2jjDp > div > div > div:nth-child(1) > div > div > div > div.monitor_value_3Yexa");
        const y = document.querySelector("body > div.index_app_3Qs6X > div > div.gui_body-wrapper_-N0sA.box_box_2jjDp > div > div.gui_stage-and-target-wrapper_69KBf.box_box_2jjDp > div.stage-wrapper_stage-wrapper_2bejr.box_box_2jjDp > div.stage-wrapper_stage-canvas-wrapper_3ewmd.box_box_2jjDp > div > div.stage_stage_1fD7k.box_box_2jjDp > div.stage_monitor-wrapper_2w6m8.box_box_2jjDp > div > div > div:nth-child(2) > div > div > div > div.monitor_value_3Yexa");
        ws___.send(x.innerText + "," + y.innerText);
    }, 100);
    alert("connected");
};
ws___.onclose = function (e) {
    clearInterval(id___);
    alert("closed");
}
