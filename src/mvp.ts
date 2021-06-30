interface U {
    all: () => void
    parent: () => void
}

interface M {
}

interface View<V, Ut = U, VParent = V> {
    parent: VParent,
    children: () => View<any, Ut>,
}

class C<M, V, VParent>
{
    public model: M
    public api: {}
    private view: V
    private update: U

    constructor(view: V, model: M) {
        this.model = model
        this.view = view
    }
}
