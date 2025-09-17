   document.getElementById('searchBox').addEventListener('keyup', function() {
            let filter = this.value.toUpperCase();
            let mainSections = document.querySelectorAll('.main-section');
            mainSections.forEach(function(section) {
                let categoryBoxes = section.querySelectorAll('.category-box');
                let sectionHasVisibleContent = false;
                categoryBoxes.forEach(function(box) {
                    let links = box.getElementsByTagName('li');
                    let boxHasVisibleLinks = false;
                    for (let i = 0; i < links.length; i++) {
                        let a = links[i].getElementsByTagName('a')[0];
                        if (a.textContent.toUpperCase().indexOf(filter) > -1) {
                            links[i].style.display = "";
                            boxHasVisibleLinks = true;
                        } else {
                            links[i].style.display = "none";
                        }
                    }
                    if (boxHasVisibleLinks) {
                        box.style.display = "";
                        sectionHasVisibleContent = true;
                    } else {
                        box.style.display = "none";
                    }
                });
                if (sectionHasVisibleContent) {
                    section.style.display = "";
                } else {
                    section.style.display = "none";
                }
            });
        });