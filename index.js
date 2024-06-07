function showsideBar()
{
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.add("show");
    document.body.classList.add('show')
}
function HidesideBar()
{
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.remove("show")
    document.body.classList.remove('show')
}