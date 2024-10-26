document.addEventListener("DOMContentLoaded", function () {
    const accordions = ['flush-collapseOne', 'flush-collapseTwo', 'flush-collapseThree'];
    const accordionButtons = ['americasAccordionButton', 'apacAccordionButton', 'emeaAccordionButton'];

    function collapseAllOthers(current) {
        accordions.forEach(collapsible => {
            if (collapsible !== current && document.getElementById(collapsible).classList.contains('show')) {
                new bootstrap.Collapse(document.getElementById(collapsible), { toggle: true }).hide();
            }
        });
    }

    accordionButtons.forEach((buttonId, idx) => {
        document.getElementById(buttonId).addEventListener('click', function () {
            collapseAllOthers(accordions[idx]);
            new bootstrap.Collapse(document.getElementById(accordions[idx]), { toggle: true }).show();
        });
    });
});