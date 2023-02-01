        <div class="modal fade" id="exampleModalLong-<%= thanhvien._id %> " tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="/api/ThanhViens/update/<%= thanhvien.id %> " method="POST">
                            <div class="form-group">
                                <label for="exampleInputEmail1">hoTen</label>
                                <input type="name" class="form-control" id="exampleInputEmail1"
                                    value="<%= thanhvien.hoTen %>" name="hoTen" placeholder="ho và tên">
                                <label for="exampleInputEmail1">gioiTinh</label>
                                <input type="name" class="form-control" id="exampleInputEmail1"
                                    value="<%= thanhvien.gioiTinh %>" name="gioiTinh" placeholder="Giới Tính">
                                <label for="exampleInputEmail1">ngaySinh</label>
                                <input type="date" class="form-control" id="exampleInputEmail1"
                                    value="<%= thanhvien.ngaySinh %>" name="ngaySinh" placeholder="ngaySinh">
                                <label for="exampleInputEmail1">email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    value="<%= thanhvien.email %>" name="email" placeholder="email">
                                <label for="exampleInputEmail1">soDienThoai</label>
                                <input type="name" class="form-control" id="exampleInputEmail1"
                                    value="<%= thanhvien.soDienThoai %>" name="soDienThoai" placeholder="soDienThoai">
                            </div>
                            <button type="submit" value="Update" class="btn btn-primary">Submit</button>
                            <button type="submit" class="btn btn-primary" id="close_form-ThanhVien">close</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>