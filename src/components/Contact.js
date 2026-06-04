import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// https://web3forms.com 에서 발급받은 access key
const WEB3FORMS_ACCESS_KEY = "c411915f-4e05-46fb-a1fd-47633dacf29c";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const payload = Object.fromEntries(new FormData(e.target).entries());
    payload.access_key = WEB3FORMS_ACCESS_KEY;
    payload.subject = "포트폴리오 Contact 폼 새 메시지";
    payload.from_name = "Portfolio Contact Form";

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7">Get in touch</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Contact Me
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  required
                  id="message"
                  rows={4}
                  className="block bg-transparent w-full rounded-md border-0 px-3.5 py-2 text-current ring-1 ring-inset ring-base-content focus:ring-2 focus:ring-inset focus:ring-current sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-outline text-sm w-full"
            >
              {status === "sending" ? "Sending..." : "Send it"}
            </button>
          </div>

          {status === "success" && (
            <p className="mt-4 text-center text-sm text-success">
              메시지가 성공적으로 전송되었습니다. 감사합니다! 🎉
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-sm text-error">
              전송에 실패했습니다. 잠시 후 다시 시도해 주세요.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
