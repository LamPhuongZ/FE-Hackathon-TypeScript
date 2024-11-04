import { useEffect, useRef } from "react";
import img from "../../assets/images/101.png"
import { useLocation } from "react-router-dom";

export default function PolicyPage() {
  const query = new URLSearchParams(useLocation().search);
  const section = query.get("section");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section === "policy" && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  return (
    <div ref={ref}>
      <div className="px-10 bg-blue-200 py-3 font-medium text-3xl">
        Chính Sách
      </div>
      <div>
        <div className="max-w-screen-lg mx-auto py-6 px-10 mt-10 bg-white shadow-md rounded-lg">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">
              1. Quyền Lợi của Người Lao Động
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Người lao động được cung cấp môi trường tìm kiếm việc làm an
                toàn và minh bạch, với thông tin tuyển dụng rõ ràng.
              </li>
              <li>
                EasyJob cam kết bảo mật thông tin cá nhân của người lao động,
                đảm bảo dữ liệu chỉ được sử dụng cho mục đích tuyển dụng và
                không chia sẻ với bên thứ ba khi không có sự đồng ý.
              </li>
              <li>
                Người lao động có quyền từ chối công việc không phù hợp với mô
                tả ban đầu hoặc vi phạm các điều khoản lao động đã thỏa thuận.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">
              2. Trách Nhiệm của Người Lao Động
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Người lao động cam kết cung cấp thông tin chính xác và trung
                thực trong hồ sơ cá nhân và quá trình ứng tuyển.
              </li>
              <li>
                Thực hiện công việc đúng giờ, đầy đủ, và tuân thủ các yêu cầu
                công việc của nhà tuyển dụng.
              </li>
              <li>
                Bảo vệ thông tin của nhà tuyển dụng và không tiết lộ thông tin
                bảo mật của công ty khi chưa được phép.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">
              3. Quyền Lợi của Nhà Tuyển Dụng
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Nhà tuyển dụng có quyền truy cập vào nguồn lao động đa dạng,
                đáp ứng nhu cầu tuyển dụng cho các công việc part-time, thời
                vụ.
              </li>
              <li>
                EasyJob đảm bảo hỗ trợ tối đa trong việc đăng tin, quản lý
                thông tin ứng viên, và thông báo kịp thời khi có ứng viên phù
                hợp.
              </li>
              <li>
                Nhà tuyển dụng có quyền từ chối hoặc kết thúc hợp đồng với
                người lao động nếu phát hiện vi phạm điều khoản hợp đồng.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">
              4. Trách Nhiệm của Nhà Tuyển Dụng
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Cung cấp thông tin công việc chi tiết và minh bạch, bao gồm
                mức lương, mô tả công việc, và thời gian làm việc.
              </li>
              <li>
                Đảm bảo trả lương đúng hạn và đúng thỏa thuận, bảo vệ quyền
                lợi của người lao động trong suốt quá trình làm việc.
              </li>
              <li>
                Không yêu cầu người lao động thực hiện các công việc ngoài
                phạm vi mô tả hoặc vi phạm đạo đức, pháp luật.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">
              5. Chính Sách Thanh Toán và Lương
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                EasyJob không can thiệp trực tiếp vào quá trình thanh toán
                lương giữa người lao động và nhà tuyển dụng, nhưng sẽ hỗ trợ
                khi có tranh chấp xảy ra.
              </li>
              <li>
                EasyJob khuyến nghị hai bên lập thỏa thuận về hình thức và
                thời gian thanh toán lương rõ ràng trước khi bắt đầu công
                việc.
              </li>
              <li>
                Mọi tranh chấp về lương bổng sẽ được xử lý theo quy định của
                pháp luật và các điều khoản đã thỏa thuận giữa hai bên.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">
              6. Chính Sách Bảo Mật và An Toàn
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                EasyJob cam kết bảo mật toàn bộ thông tin cá nhân của người
                dùng và chỉ sử dụng với mục đích tuyển dụng.
              </li>
              <li>
                EasyJob sẽ không chia sẻ dữ liệu cá nhân với bất kỳ bên thứ ba
                nào khi chưa có sự đồng ý của người dùng, trừ khi yêu cầu bởi
                cơ quan pháp luật.
              </li>
              <li>
                EasyJob cũng sẽ thực hiện các biện pháp bảo vệ an toàn cho nền
                tảng để ngăn chặn rủi ro về bảo mật.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold text-blue-600 border-b pb-2 mb-4">
              7. Chính Sách Giải Quyết Khiếu Nại
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Người lao động hoặc nhà tuyển dụng có quyền gửi khiếu nại về
                dịch vụ của EasyJob qua kênh liên hệ chính thức.
              </li>
              <li>
                EasyJob sẽ tiến hành giải quyết khiếu nại một cách công bằng
                và minh bạch trong thời gian sớm nhất, và có thể hỗ trợ pháp
                lý nếu cần thiết.
              </li>
              <li>
                Các trường hợp vi phạm nghiêm trọng hoặc lạm dụng nền tảng sẽ
                bị xử lý theo quy định của pháp luật.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
