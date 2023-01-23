const RemovableList = ({ list, onRemoveItem, onAddItem, actionText }) => {
    return (
        <div className="removable-list-items">
            {list.length > 0 && (
                <ul>
                    {list.map((item) => (
                        <li key={item}>
                            <i
                                class="fa-solid fa-xmark"
                                onClick={onRemoveItem.bind(null, item)}
                            ></i>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}
            <button
                className="btn btn-primary"
                type="button"
                onClick={onAddItem}
            >
                {actionText}
            </button>
        </div>
    );
};
export default RemovableList;
