module.exports = function(fn)
{
    if (typeof fn === "function" && fn.constructor.name === "AsyncFunction") {
        return true;
    }
    return false;
}
