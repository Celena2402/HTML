const modal=$.modal({
    title: 'Vlad Modal',
    closable:true,
    content: `
        <h4> Modal is</h4>
        <p>Lorem ipsum</p>
    `
    
    footerButtons: [
        {
            text:'OK', type:'primary', handler() {
                console.log('Primary')
            }
        }
        {
            text:'Cancel', type:'danger', handler() {
                console.log('Danger')
            }
        }
    ]
})
