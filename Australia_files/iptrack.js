var iptrack_obj = function ()
{
    this.track = function (accNo)
    {
        if (document.body != null)
        {
            iptrack.sendHit(accNo);
            return;
        };
        window.setTimeout(function ()
        {
            iptrack.track(accNo);
        }, 100);
    }

    this.sendHit = function (accNo)
    {
        try
        {
            var r = encodeURIComponent(document.referrer.replace(/<\/?[^>]+(>|$)/g, ""));
            var w = screen.width;
            var h = screen.height;
            var i = document.createElement("img");
            var u = window.location.href;
            var p = u.split("/")[0];
            i.src = p + "//iptrack.io/Admin/who.ashx?Type=Hit&Data=" + w + "|" + h + "|" + r + "|" + accNo + "|" + encodeURIComponent(u.replace(/<\/?[^>]+(>|$)/g, ""));
            i.style.display = "none";
            document.body.appendChild(i);
        }
        catch (e)
        {
        }
    }
};
var iptrack = new iptrack_obj();
var iptrack_params = iptrack_params || [];
for (var i = 0; i < iptrack_params.length; i++)
{
    switch (iptrack_params[i][0])
    {
        case "send":
        case "immediate":
            iptrack.sendHit(iptrack_params[i][1]);
            break;
        case "track":
        case "wait":
            iptrack.track(iptrack_params[i][1]);
            break;
    }
}