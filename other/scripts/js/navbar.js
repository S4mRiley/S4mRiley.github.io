function openNav()
{
    if (document.documentElement.clientWidth < 800)
    {
        document.getElementById("mainbar").style.width = "100%";
    }
    else
    {
        document.getElementById("mainbar").style.width = "250px";
    }
}
  
function closeNav()
{
    document.getElementById("mainbar").style.width = "";
}