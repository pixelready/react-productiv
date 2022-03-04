< App />
    <ListController />
            addItem(item){};
            deleteItem(id){};
            updateItem(item){};
            filterItems(criteria){};
            state:
                - items [{title, description, priority, id, editMode},...]  
        <List type="todo" items=[items] />
            <Item actions=[{update:updateItem()},{delete:deleteItem()}] content={item} />
            ||
            <ItemForm item={item} submitAction={updateItem} />
            ...
        <SpecialItemDisplay item={item} />
        <ItemForm submitAction={addItem} />
