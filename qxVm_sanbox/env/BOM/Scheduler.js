Scheduler = function Scheduler(createObj_key) {
    if (createObj_key !== qxVm.memory.$createObj_key) {
        throw new TypeError("Illegal constructor");
    }
    qxVm.memory.private_data.set(this, {})
}; qxVm.safefunction(Scheduler);

; (function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['postTask'];

    Scheduler.prototype = {
        postTask() {
            debugger;
            if (!Scheduler.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
        },
    }
    qxVm.rename(Scheduler.prototype, "Scheduler");
    qxVm.safeDescriptor_addConstructor(Scheduler);
    qxVm.safe_Objattribute(Scheduler, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
})();
scheduler = new Scheduler(qxVm.memory.$createObj_key)

