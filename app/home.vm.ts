export function useHomeViewModel() {
    const userName = "Bia";

    const shelves = [
        {id: "finances", title: "Finances", color: "#2F7D6E", icon: "cash-outline"},
        {id: "notes", title: "Notes", color: "#4A6FA5", icon: "create-outline"},
        {id: "tasks", title: "Tasks", color: "#3B82F6", icon: "list-outline"},
        {id: "projects", title: "Projects", color: "#E07A5F", icon: "folder-outline"},
        {id: "goals", title: "Goals", color: "#C9A227", icon: "star-outline"},
        {id: "shopping", title: "Shopping", color: "#7C5CFA", icon: "cart-outline"},
    ];

    return {
        userName,
        shelves,
    };
}