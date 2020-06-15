class Carousel {

    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} options.slidesToScroll nombre d'elements à faire défiler
     * @param {Object} options.slidesVisible nombre d'elements visible dans un slide
     */
    constructor (element, options = {}) {
        this.element = element
        this.options = Object.assign({}, { 
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
        let children = [].slice.call(element.children)
        this.currentItem = 0
        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel__container')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.items = children.map((child) => {
            let item = this.createDivWithClass('carousel__item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle()
        this.createNavigation()
        this.next()
    }


    /**
     * Applique les bonnes dimensions aux elements du carousel 
     */
    setStyle () {
        let ratio = this.items.length / this.options.slidesVisible
        this.container.style.width = (ratio * 90) + "%"
        // this.items.forEach(item => item.style.width = ((100 / this.options.slidesVisible) / ratio )+ "%")
        this.items.forEach(item => item.setAttribute("style", "transform: scale(0.5); width:"+this.container.offsetWidth/3+"px"))
    }

    /**
     * Créer les boutons de navigation
     */
    createNavigation () {
        let nextButton = this.createDivWithClass('carousel__next')
        let prevButton = this.createDivWithClass('carousel__prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))

    }

    next() {
        this.prevItem = this.currentItem
        this.gotoItem(this.currentItem + this.options.slidesToScroll)
        // refreshDZ()
    }

    prev() {
        this.prevItem = this.currentItem
        this.gotoItem(this.currentItem - this.options.slidesToScroll)
        // refreshDZ()
    }

    /**
     * Déplace le carousel vers l'élément ciblé
     * @param {number} index 
     */
    gotoItem (index) {
        if (index < 0)                                                  //
        {                                                               //
            index = this.items.length - this.options.slidesVisible      //
        }                                                               //  Loop     
        else if (index >= this.items.length)                            //
        {                                                               //
            index = 0                                                   //
        }                                                               //
        let trueCurrentItem = this.items[index]                 // Contient la <div class="carousel__item"> courante
        let truePrevItem = this.items[this.prevItem]            // Contient la <div class="carousel__item"> précédement courante
        let translateX = index * -100 / this.items.length
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
        this.currentItem = index
        trueCurrentItem.setAttribute("style", "transform: scale(1); width:"+this.container.offsetWidth/3+"px")  // Zoom sur l'element courant et conserve le width
        trueCurrentItem.classList.add("focused")
        truePrevItem.setAttribute("style", "transform: scale(0.5); width:"+this.container.offsetWidth/3+"px")   // De-zoom sur l'element précedent et conserve le width
        truePrevItem.classList.remove("focused")
    }


    /**
     * 
     * @param {string} className
     * @returns {HTMLElement}
     */
    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }
}

document.addEventListener('DOMContentLoaded', function () {

    new Carousel(document.querySelector('#carousel__asso'), {
        slidesVisible : 1,
        slidesToScroll: 1
    })

});




/* DRAG&DROP */

// var EventUtil = {
//     addHandler: function(element, type, handler) {
//         if (element.addEventListener) {
//             element.addEventListener(type, handler, false);
//         } else if (element.attachEvent) {
//             element.attachEvent("on" + type, handler);
//         } else {
//             element["on" + type] = handler;
//         }
//     },
//     removeHandler: function(element, type, handler) {
//         if (element.removeEventListener) {
//             element.removeEventListener(type, handler, false);
//         } else if (element.detachEvent) {
//             element.detachEvent("on" + type, handler);
//         } else {
//             element["on" + type] = null;
//         }
//     },
//     getCurrentTarget: function(e) {
//         if (e.toElement) {
//             return e.toElement;
//         } else if (e.currentTarget) {
//             return e.currentTarget;
//         } else if (e.srcElement) {
//             return e.srcElement;
//         } else {
//             return null;
//         }
//     },
//     preventDefault: function(e) {
//         e.preventDefault ? e.preventDefault() : e.returnValue = false;
//     },

//     /**
//      * @author http://www.quirksmode.org/js/events_properties.html
//      * @method getMousePosition
//      * @param e
//      */
//     getMousePosition: function(e) {
//         var posx = 0,
//             posy = 0;
//         if (!e) {
//             e = window.event;
//         }

//         if (e.pageX || e.pageY) {
//             posx = e.pageX;
//             posy = e.pageY;
//         }
//         else if (e.clientX || e.clientY) {
//             posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//             posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//         }

//         return {
//             x: posx,
//             y: posy
//         };
//     }

// };


// var dm = document.getElementById('Dragme'),

//     effect = 'move',

//     format = 'Text';

// EventUtil.addHandler(dm, 'dragstart', function(e) {

//     e.dataTransfer.setData(format, 'Dragme');


//     e.dataTransfer.effectAllowed = effect;


//     var target = EventUtil.getCurrentTarget(e);
//     target.style.backgroundColor = 'blue';
//     target.style.cursor = 'move';

//     return true;
// });


// EventUtil.addHandler(dm, 'drag', function(e) {
//     return true;
// });


// EventUtil.addHandler(dm, 'dragend', function(e) {

//     var target = EventUtil.getCurrentTarget(e);
//     target.style.backgroundColor = '';
//     target.style.cursor = 'default';
//     return true;
// });



// window.addEventListener("load", function(event) {
//     //refreshDZ()
// });

// var dz = null;

// function refreshDZ() {
//     var parent = document.getElementsByClassName('focused');
//     dz = parent.item(0).children.item(0).children.item(0)
//     console.debug(dz)
// }

// window.addEventListener("load", function(event) {

//     EventUtil.addHandler(dz, 'dragenter', function(e) {

//         var target = EventUtil.getCurrentTarget(e);
//         target.style.backgroundColor = 'orange';
    
//         return false;
//     });
    
//     EventUtil.addHandler(dz, 'dragover', function(e) {
        
//         EventUtil.preventDefault(e);
    
//         e.dataTransfer.dropEffect = effect;
    
//         return false;
//     });
    
//     EventUtil.addHandler(dz, 'dragleave', function(e) {
    
//         var target = EventUtil.getCurrentTarget(e);
//         target.style.backgroundColor = '';
    
//         return false;
//     });
    
//     EventUtil.addHandler(dz, 'drop', function(e) {
//         EventUtil.preventDefault(e);
    
    
//         var currentTarget = EventUtil.getCurrentTarget(e),
    
//             DragMeId = e.dataTransfer.getData(format),
        
//             DragMe = document.getElementById(DragMeId);
    
    
//         currentTarget.appendChild(DragMe);
    
//         var target = EventUtil.getCurrentTarget(e);
//         target.style.backgroundColor = '';
    
//         console.log("Vous avez choisie l'association : "+dz.children.item(0).id)
    
//         // $.ajax({
//         //     type: "POST",
//         //     url: './test.php',//url to file
//         //     data: {"association":""+dz.children.item(0).id}
//         // });
    
//         // addScript("https://paypal.com/sdk/js?client-id=YOUR_CLIENT_ID");
    
//         return false;
//     });
// });