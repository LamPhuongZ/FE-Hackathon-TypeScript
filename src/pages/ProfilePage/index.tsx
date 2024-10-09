import React from "react";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import Field from "../../components/field/field";
import Button from "../../components/button/Button";

type Props = {};

export default function ProfilePage({}: Props) {
  return (
    <div className="py-20 px-[72px]">
      <div className="bg-white py-4 shadow-md px-11">
        <div className="mb-10 flex items-start justify-between px-11 pt-10">
          <div>
            <h1 className="text-[40px] font-semibold">Thông tin tài khoản</h1>
            <p className="text-xl font-semibold text-[rgba(10,_22,_41,_0.50)]">
              Cập nhật thông tin tài khoản
            </p>
          </div>
        </div>
        <form>
          <div className="w-[200px] h-[200px] rounded-full mx-auto mb-10"></div>
          <div className="border border-solid border-[#D5D5D5] rounded-3xl">
            <div className="pt-14 px-8">
              <div className="form-layout ">
                <Field>
                  <Label htmlFor="fullname">Họ tên đầy đủ</Label>
                  <Input
                    name="fullname"
                    placeholder="Nhập họ tên đầy đủ"
                  ></Input>
                </Field>
                <Field>
                  <Label htmlFor="date">Ngày sinh</Label>
                  <Input
                    name="date"
                    placeholder="Nhập ngày tháng năm sinh"
                  ></Input>
                </Field>
              </div>
              <div className="form-layout ">
                <Field>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input name="phone" placeholder="Nhập số điện thoại"></Input>
                </Field>
                <Field>
                  <Label htmlFor="join">Tham gia từ</Label>
                  <Input name="join" placeholder=""></Input>
                </Field>
              </div>
              <div className="form-layout ">
                <Field>
                  <Label htmlFor="address">Địa chỉ</Label>
                  <Input name="address" placeholder="Nhập địa chỉ"></Input>
                </Field>
                <Field>
                  <Label htmlFor="email">Email (nếu có)</Label>
                  <Input
                    name="email"
                    placeholder="Nhập email"
                    type="email"
                  ></Input>
                </Field>
              </div>
            </div>
          </div>
        </form>
        <Button></Button>
      </div>
    </div>
  );
}
