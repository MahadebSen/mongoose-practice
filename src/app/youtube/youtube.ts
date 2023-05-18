const { google } = require("googleapis");
const fs = require("fs");

const YOUTUBE_UPLOAD_SCOPE = "https://www.googleapis.com/auth/youtube.upload";
const YOUTUBE_API_SERVICE_NAME = "youtube";
const YOUTUBE_API_VERSION = "v3";

async function getAuthenticatedService() {
  const auth = new google.auth.GoogleAuth({
    keyfile:
      "/Users/mahadebsen/AIMonk/client_secret_961331760740-hl43sb9qkdv1gjv0rsmqslrkltgr1pok.apps.googleusercontent.com.json",
    scopes: [YOUTUBE_UPLOAD_SCOPE],
  });

  const authClient = await auth.getClient();
  google.options({
    auth: authClient,
  });

  const youtube = google.youtube({
    version: YOUTUBE_API_VERSION,
  });

  return youtube;
}

async function main() {
  const opts = {
    file: "/Users/mahadebsen/AIMonk/videos/test.mp4",
    title: "Test Title",
    description: "Test Description",
    category_id: 22,
    keywords: "",
    privacy_status: "public",
  };

  if (!fs.existsSync(opts.file)) {
    console.error("File does not exist");
    return;
  }

  const youtube = await getAuthenticatedService();

  try {
    const body = {
      snippet: {
        title: opts.title,
        description: opts.description,
        tags: opts.keywords.split(","),
        categoryId: opts.category_id,
      },
      status: {
        privacyStatus: opts.privacy_status,
      },
    };

    const parameters = {
      part: Object.keys(body).join(","),
      media: {
        body: fs.createReadStream(opts.file),
      },
      notifySubscribers: false,
    };

    const response = await youtube.videos.insert(parameters);

    console.log(`Video id '${response.data.id}' was successfully uploaded.`);
  } catch (error) {
    console.error("Error uploading video:", error);
  }
}

export default main;
