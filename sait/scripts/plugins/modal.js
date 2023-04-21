function _createModal(options){
    const modal=document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `    
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">                    
                    <span class="modal-close">&times</span> <!-- Знак + по которому будем закрывать окно-->
                </div>

                <div class="modal-text">
                    <div class="modal-header-title">
                        <span class="modal-title">Консультация</span>
                        <br><br>
                        <p>Просто оставьте свои контакты и наш менеджер Вас проконсультирует</p>
                    </div>

                    <div class="modal-boby">
                        <form class="modal-form">
                            <div class="modal-form-name">
                                <span class="modal-form-text">Ваше имя</span>
                                <input type="text" class="modal-field" placeholder="Ваше имя">
                            </div>
                            <div class="modal-form-name">
                                
                                <input type="text" class="modal-field" placeholder="Ваш номер телефона">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="modal-button">Оставить заявку</button>
                        
                    </div>
                </div>
            </div>
        </div>        
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal=function(options){
    const ANIMATION_SPEED=200
    const $modal=_createModal(options)
    let closing=false
    return {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing=true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing=false
            }, ANIMATION_SPEED)
        }, 
        destrov() {}        
    }
}