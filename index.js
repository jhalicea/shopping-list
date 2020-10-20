function main(){
console.log('hello');
//add new item to the list
//      
$('#js-shopping-list-form').submit(function (event){
    event.preventDefault();
    // let itemText = $('#shopping-list-entry').val();
    let itemText = $('#shopping-list-entry').val();
    console.log(itemText);

$('.shopping-list').append(
    `<li>
    <span class="shopping-item">${itemText}</span>
    <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button>
    </div>
    </li>`);

    

})

$('.shopping-list').on('click', '.shopping-item-delete', function(event){
    console.log(event.currentTarget);
    $(event.currentTarget).closest( "li" ).remove();

});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    // console.log(event.currentTarget);
    // console.log(this);

    //console.log($(event.currentTarget).find('.shopping-item').attr('shopping-item-controls'));

    console.log(this, event.currentTarget);

    console.log($(this, event.currentTarget).parent().siblings());

    $(this, event.currentTarget).parent().siblings().toggleClass("shopping-item__checked");

    //$(event.currentTarget).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");

});



};

$(main());